import styled from 'vue-styled-components';
import $ from "jquery";

const Container = styled.div`
    width:100%;
    .textarea{
        min-height:80px;
    }
    .button{
        width:100%;
        font-weight:bold !important;
        font-family:'Mitr';
    }
`


export default {
methods: {
    submitForm(e){
        e.preventDefault()
        // console.log(e)
        var isShare = this.$route.path == '/share'
        var url = isShare?'https://script.google.com/macros/u/0/s/AKfycbzxj8BQPITYL7HdhKdZfL7QSCBQ4nuNCawPe7eBH-PbteOjAkc/exec'
        :"https://script.google.com/macros/s/AKfycbwmgwh0p2FrJiIq-o4-r9-t3GF8iBcom6X-ROJLEWvYQ9di-2M/exec"
        var nof = isShare?7:6
        var res = 1
        var data = {};
        var $form = $('#formSubmit').find('input, textarea')
        $form.each(function( i,field) {
          var target = field.name != 'location'?$('input[name='+field.name+']') : $('textarea[name='+field.name+']')
        //   console.log(target)
          if(i<nof && field.value==""){
            res=0
            target.addClass("is-danger");
          }else{
            data[field.name] = field.value;
            if(target.hasClass('is-danger')){
              target.removeClass("is-danger");
            }
          }
        });
        if(!res){
            alert('กรุณากรอกข้อมูลให้ครบ')
        //   this.snackbar('Invalid Infomation')
          return 0
        }else{
            // Serialize the data in the form
            var serializedData = $('#formSubmit').serialize();
            // console.log(serializedData)
        
            // Fire off the request to /form.php
            var request = $.ajax({
                url: url,
                type: "post",
                data: serializedData
            });
        
            // Callback handler that will be called on success
            request.done(function (response, textStatus, jqXHR){
                alert('ลงทะเทียนเรียบร้อย')
            });
        
            // Callback handler that will be called on failure
            request.fail(function (jqXHR, textStatus, errorThrown){
                // Log the error to the console
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            });
        }
    },
  },
  render(h) {
    var isShare = this.$route.path == '/share'
    return (
        <Container>
            <form  onSubmit={this.submitForm} id='formSubmit'>                
                <div class="columns ">
                    <div class="column">
                        <div class="field">
                            <label class="label" >ชื่อ</label>
                            <div class="control">
                                <input class="input" name='name' type="text" placeholder=""  /> 
                            </div>  
                        </div>                      
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label" >นามสกุล</label>
                            <div class="control">
                                <input class="input" name='surename' type="text" placeholder=""  />
                            </div>
                        </div>
                    </div>
                </div>            
                <div class="columns ">
                    <div class="column">
                        <div class="field">
                            <label class="label" >หมายเลขโทรศัพท์มือถือ</label>
                            <div class="control">
                                <input class="input" name='mobile' type="text" placeholder=""  /> 
                            </div>  
                        </div>                      
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label" >Line ID</label>
                            <div class="control">
                                <input class="input" name='line' type="text" placeholder=""  />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label" >Password</label>
                    <div class="control">
                        <input class="input" name='password' type="password" placeholder=""  /> 
                    </div>  
                </div>
                {isShare&&<div class="field">
                    <label class="label" >ราคาค่าเช่าต่อเดือน</label>
                    <div class="control">
                        <input class="input" name='price' type="number" placeholder=""  /> 
                    </div>  
                </div>}    
                <div class="field">
                    <label class="label">คอนโดหรือพื้นที่จอดรถที่ต้องการ</label>
                    <div class="control">
                        <textarea class="textarea" name='location' placeholder="บริเวรที่ต้องการ..." defaultValue={""} />
                    </div>
                </div>
                <button class="button is-primary is-medium" type="submit">ลงทะเบียนกับเรา</button>      
            </form>       
        </Container>     
    )
  }
}
