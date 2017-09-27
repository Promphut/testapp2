import styled from 'vue-styled-components';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:5;
    width:100%;
    display:flex;
    height:60px;
    justify-content:space-between;
    align-items:center;
    background:white;
    .button{
        margin-left:15px;
        font-family:'Mitr';
    }
    .subtitle{
        font-family:'Mitr';
    }
    .mitr{
        font-family:'Mitr';        
    }
`
const Row = styled.div`
    display:flex;
    height:60px;
    justify-content:space-between;
    align-items:center;
`
const Logo = styled.h1`
    font-family:'Mitr';
    font-size:56px;
    margin-right:30px;
    color:hsl(171, 100%, 41%);
`

export default {
  methods: {
    openNewTab(e,url){
        // console.log(url)
        e.preventDefault()
        window.open(url,'_blank') 
    }
  },
  render(h) {
    return (
        <Container>
            <div class='container is-mobile'>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <router-link to='/' ><Logo>JR</Logo></router-link>
                        </div>
                        <div class="level-item hidden-mobile">
                            <router-link to='/'  class='subtitle is-5'>ค้นหา</router-link>
                        </div>
                        <div class="level-item hidden-mobile">
                            <router-link to='/share' class='subtitle is-5'>แบ่งปัน</router-link> 
                        </div>
                    </div>

                    
                    <div class="level-right">
                        <p class="level-item hidden-mobile"><a class='mitr' href='#' onClick={(e)=>this.openNewTab(e,'http://bit.ly/addjodrod')}>ช่วยเหลือ</a></p>
                        <p class="level-item hidden-mobile"><a class='mitr' href='#' onClick={()=>alert('เตรียมพบกับฟีเจอร์นี้เร็วๆนี้')}>เข้าใช้งาน</a></p>
                        {this.$route.path=='/'?<router-link class='button is-primary is-medium' to='/share'>แบ่งปันที่จอดรถ</router-link>:
                        <router-link class='button is-primary is-medium' to='/'>ค้นหาที่จอดรถ</router-link>}
                    </div>
                </nav>
                {/* <Row>
                    <div class='columns'>
                        <router-link to='/' ><Logo>JR</Logo></router-link>
                        <router-link to='/' class='cl'>ค้นหา</router-link>
                        <router-link to='/' class='cl'>แบ่งปัน</router-link>    
                    </div>      
                    <div>
                        <router-link class='button is-primary is-inverted is-outlined is-medium' to='/share'>แบ่งปันที่จอดรถ</router-link>
                    </div>        
                </Row> */}
            </div>    
        </Container>     
    )
  }
}
