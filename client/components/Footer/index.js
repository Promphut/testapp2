import styled from 'vue-styled-components';

const Container = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    display:flex;
    height:60px;
    align-items:center;
    background-color:hsl(171, 100%, 41%);
    @media(max-width:768px){
        display:block;
        padding:20px;
        height:auto;
        position:relative;
    }
    .fa-facebook-official{
        color:white;
        font-size:56px;
        &:hover{
            cursor:pointer;
        }
    }
    .hover{
        &:hover{
            cursor:pointer;
            text-decoration:underline;
        }
    }
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
            <div class='container is-mobile'>
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                        <i class="fa fa-facebook-official fa-2x" onClick={(e)=>this.openNewTab(e,'https://www.facebook.com/Jodrod-337749356637094/')}></i>                            
                        </div>
                    </div>

                    
                    <div class="level-right">
                        <Cont class="level-item">ต้องการผู้ช่วย ติดต่อเรา Line ID : <span class='hover' onClick={(e)=>this.openNewTab(e,'http://bit.ly/addjodrod')}> {" gqh1437b"}</span></Cont>                    
                    </div>
                </nav>
            </div> 
        </Container>     
    )
  }
}
