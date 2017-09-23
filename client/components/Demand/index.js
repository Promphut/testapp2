import styled from 'vue-styled-components';

const Container = styled.form`
    width:100%;
`
const Btn = styled.button`
    width:100%;
    font-weight:bold !important;
    font-family:'Mitr';
`


export default {
  methods: {

  },
  render(h) {
    var isShare = this.$route.path == '/share'
    return (
        <Container>                
            <div class="columns is-mobile">
                <div class="column">
                    <div class="field">
                        <label class="label" >ชื่อ</label>
                        <div class="control">
                            <input class="input" type="text" placeholder=""  /> 
                        </div>  
                    </div>                      
                </div>
                <div class="column">
                    <div class="field">
                        <label class="label" >นามสกุล</label>
                        <div class="control">
                            <input class="input" type="text" placeholder=""  />
                        </div>
                    </div>
                </div>
            </div>            
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <label class="label" >หมายเลขโทรศัพท์มือถือ</label>
                        <div class="control">
                            <input class="input" type="text" placeholder=""  /> 
                        </div>  
                    </div>                      
                </div>
                <div class="column">
                    <div class="field">
                        <label class="label" >Line ID</label>
                        <div class="control">
                            <input class="input" type="text" placeholder=""  />
                        </div>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label" >Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder=""  /> 
                </div>  
            </div>
            {isShare&&<div class="field">
                <label class="label" >ราคาค่าเช่าต่อเดือน</label>
                <div class="control">
                    <input class="input" type="number" placeholder=""  /> 
                </div>  
            </div>}    
            <div class="field">
                <label class="label">คอนโดหรือพื้นที่จอดรถที่ต้องการ</label>
                <div class="control">
                    <textarea class="textarea" placeholder="บริเวรที่ต้องการ..." defaultValue={""} />
                </div>
            </div>
            <Btn class="button is-primary is-medium" type="submit" >ลงทะเบียนกับเรา</Btn>             
        </Container>     
    )
  }
}
