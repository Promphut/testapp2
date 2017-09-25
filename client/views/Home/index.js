import Counter from 'components/Counter'
import Demand from 'components/Demand'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styled from 'vue-styled-components';

const Page = styled.div`
width:100%;
  padding:150px 0 70px 0;
  .title{
    font-family:'Mitr';
  }
  h3{
    font-weight:400;
  }
  .is-3{
    text-align:center;
    font-weight:400;
    margin:35px 0 35px 0;
  }
  .link{
    display:block;
    margin-top:10px;
    color:hsl(171, 100%, 41%);
    &:hover{
      text-decoration:underline;
    }
  }
  @media(max-width:768px){
    padding:60px 0 0 0;
}
`
const Img = styled.div`
  position:fixed;
  bottom:0;
  left:0;
  height:60%;
  width:100%;
  background-image:url('/car-park.jpg');
  background-repeat:no-repeat;
  background-position:center;
`
const FormBox = styled.div`
  background-color:#f2f2f2;
  padding:30px;
`
const Line = styled.div`
  height:1px;
  width:100%;
  position:relative;
  opacity:0.3;
  background-color:hsl(0, 0%, 21%);
`
const Text = styled.div`
  width:50px;
  position:relative;
  top:12px;  
  margin:0 auto 0 auto;
  color:hsl(0, 0%, 21%);
  background:#f2f2f2;
  z-index:1;
  opacity:1;
  text-align:center;
`

export default {
  render(h) {
    var isShare = this.$route.path == '/share'
    return (
      <Page>
        {/* <Counter /> */}
        <Header/>
        <Img/>
        <div class="container is-mobile">
          <div class="columns">
            <div class='column is-two-thirds-desktop is-half-tablet hidden-mobile'>
              <h3 class="title is-1">{isShare?"ช่วยแก้ปัญหารถติดและเปลี่ยนที่ว่างของคุณให้เป็นรายได้":"ช่วยคุณค้นหาที่จอดรถและเพิ่มความสะดวกให้กับคนเดินทาง"}</h3> 
            </div>
            <FormBox class='column'>
              <router-link to='/' class="title is-3 link hidden-mobile" >{isShare?"ลงทะเบียนค้นหาที่จอดรถ":"ลงทะเบียนแบ่งปันที่จอดรถ"}</router-link> 
              <Text class='hidden-mobile'>หรือ</Text>
              <Line class='hidden-mobile'/>
              <h2 class="title is-3">{isShare?"ลงทะเบียนแบ่งปันที่จอดรถ":"ลงทะเบียนค้นหาที่จอดรถ"}</h2> 
              <Demand/>
            </FormBox>
          </div>          
        </div>
        <Footer/>
      </Page>
    )
  }
}

