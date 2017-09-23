import styled from 'vue-styled-components';

const Container = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    display:flex;
    height:60px;
    justify-content:space-between;
    align-items:center;
    background-color:hsl(171, 100%, 41%);
`
const Row = styled.div`
    display:flex;
    height:60px;
    justify-content:space-between;
    align-items:center;
`
const Cont = styled.p`
    color:white;
    font-family:'Mitr';
`
const IC = styled.i`
    color:white;
    font-size:56px;
    &:hover{
        cursor:pointer;
    }
`

export default {
  methods: {
    openNewTab(e,url){
        console.log(url)
        e.preventDefault()
        window.open(url,'_blank') 
    }
  },
  render(h) {
    return (
        <Container>
            <div class='container'>
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                        <IC class="fa fa-facebook-official fa-2x" on-click={(e)=>this.openNewTab(e,'https://www.facebook.com')}></IC>                            
                        </div>
                    </div>

                    
                    <div class="level-right">
                        <Cont class="level-item">ต้องการผู้ช่วย ติดต่อเรา Line ID : gqh1437b</Cont>                    
                    </div>
                </nav>
            </div> 
        </Container>     
    )
  }
}
