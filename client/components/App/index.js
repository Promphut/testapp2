import './style.css'
import { injectGlobal } from 'vue-styled-components';

injectGlobal`

  @media screen and (max-width:768px) {
    .hidden-mobile{
      display:none !important;
    }
  } 
`;
export default {
  render(h) {
    return (
      <div id="app">
        <router-view></router-view>
      </div>
    )
  }
}
