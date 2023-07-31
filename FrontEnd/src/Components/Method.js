import React from "react";
import Footer from "./Footer";
import Header1 from "./Header1";
import Navbar from "./Navbar";
import './Method.css';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Method = () => {
  const location = useLocation();
  const {totalprice} = location.state || {};
  const bookid = uuidv4();
  const navigate = useNavigate();
  navigate('/method', { state: { bookid } });
  return (
    <>
      <div className='blackm'>
      <Navbar/>
      </div>
      <div className='Payidm'>
        <div id="cen"><h2>BookMyStay's Payment portal</h2></div>
        <div className="methodbox">
          <div className="methodst">
            <p id="ord">BookMyStay</p>
            <p id="bookid">Booking id : {bookid}</p>
            <p id="bid">Total Amount : &#x20b9; {totalprice}</p>
            <div className="container">
            <form>
            </form>
            <div className="slc">SELECT A PAYMENT METHOD</div>
            <div className="log">
                <div id="split"><img src="data:image/png;base64,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" width='40px'></img><p id="text">Card</p></div>
                <div id="split"><Link to='/Net'><img src="data:image/png;base64,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" width='40px'></img><p id="text">Net Banking</p></Link></div>
                <div id="split"><a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABLFBMVEX///////38///+/v////v9/fz//fr4///7/f/8/v3//Pv8//7//vr///kARGoAQWkANl4AOV8AM2T/+/8AMloAPGYAQmQAO18AN2YAM1gAP2YARWsAOmEAQW0AQ2QAM10ARGUALlkANFPz9vMAR2JWeo/r9fdrgpYAPFzh6OoANViarbsAKlwAKU8WRGHQ3+d3kKKuw9AjUGw7XXjM2Nmius+/0diJoK0AH0UxYnmiu8S0v9OzxMva8fggRGYAIE1Ga346X31ZfKLD0956nK+LpLBRZneps76WtMAAL2N4kJm1wMRSaoVmf5cAIVZdcZExUmsbW38HRlpCWnx1kqpae4qXqLzQ4NuQqa1IYnslVGtPdodfhpdaf5gANk7Gz+Hn4+x7pMI/a5BDaW6OBpbqAAAPHElEQVR4nO2d+1vbRtbHZ0Zz00gjyZEl+SbfkS0DtjGOXai5raGhCdkl3YQWGpLd7v//P7xj7BQvBfJs8rRYefX5zbLgmcNovuecOWcEACkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKauJbhJOMQSaMDRkiKcezp8AgsRgz1utkQ4FNJ56NH8GRMNs/J2Xy28BaurkqYfzJyAQjq2mH3q5SCPf5BwKjofPbL9d7bxkGk76OtRdZUM0bu7sSg7l/InUJPi+3n6z5lmVEdSS/pTqGsFgLW/7mxMlnQtrJLioBzt7+3ZwycynHd/XQzgg8YFl28X9WKD5E6lj0M+UDsHzrF85kUmfQ8IAGB0026Wy8x65c2t0CtYqpfc4ehfY7R584hF+LYIRsFtrHv2t7gdTqt9c0wQ4zDnHEgwPyqVr+sQj/FoMyuFJ1v8hHoTtN5FEnGsEUjYIsi8AB+NSOXsKqM4TLKg6BLCf9VpoN1/MnmAICQEQxvt+dqIsjLbDoB1BkWQLDcjJ63buGILDsFDoQUIhh2BY8Ds9oHEw+tHKvmQJtm+mKiw6Kj87lbTXLZYukYYhx2BSKldjrCFBWp5VHwGQYLkhlMX71cqW1MG4Vq69mvkPDF5VqoNYcsRwHBbCHzjATz3OL0fNWexX2yNAJN/2/GJPMlcHF45/1uCUCwZeZJq5MRM6ICChnhHCXqfq9wAhZBLYnRaQhKC+E7zWOQE6I9Fa2PT+JZ96mF+OBsHHrN+NAEQUtJxqZSoNwlpepq8kSCc6Fb2/N8N/yKROIFAeAaw7wRFTWqLR+LxgnUcQsh07u4451LGLTTAO/NzpU4/zy3E56DuZ34CmQ+X0Tjea+QsIo2a4qXINJbSuIbVo22vmkuswEMTXgfdOLcObj2dO8cMURJnqxhBRoc3vGWXDep9olD3hOL8cAsFluzL+5PBGXTtzCeJadSNGkMwtpKzlFDtTqCVTbiBgg0JtHcD5HMKTWvFgMspWawyBxRRSGnVD+6iBkmphvF+oTcFivszGtmdtH1fKNlB5xvyaMn43a2VPEhq8EdArWE4PLEbP5JZT9bsqz5jZPLeQcBEdtn0vfsJhfgU6nGaq3RjR+UKUKr2vWGHXPru9BUIdxT/+lDvTBUNm4iJUA2w5/rmycL4OMQHxoGA3M/3bW9RTqoPjSjHzYjap2hMN9IsxlMO/iUHnFgqNosmmXc6s396iKU9Con96zUqkHEjiLMSo72Ve62CxgSE0QsGZ7+cmS/coEwUY5apenwmUuOgNqxjUeasitvneNkE6BdOylTu8vYVrGhGEvXxWLY2UFD3NOL8czI/a2V9U1L2kIPii09xY1ylfsobIaL/QfhOJxO3y48Z+ubarnMXS04ejbaswiCHRb69pOlivFOsXmv7H37Ha6FGlejACYllADPmxUnVagKLba4LJxpoSm17ilAb0atZBDP/LCxAT9OvFzrLYAGFQrbdZ9s6iv3qAX83ombURURctWegyHA/K3jZfuo1LneO3+WruxV8+wq8EPs96/p1ruonRq81qvq9J3RVLj2rj0ivXIincJAkqHDvemzvXuCY4Ogzs7nAWByzP5DRrd/qcJqvipjL8tTuXlIVA63XD0g6gGLm3XxCzn/M7H4FMktygd7mgf+eaitKUtq7XrPy6TpZzJqLWZ6FwFJlJmsPGYa5+cecahgghGZ0HtnKKy0EM5GC3ZudPRJL2M+JzvzK57wsiR4Hf/htoLD2RmuG677xmrSeYphkJyaN6+1Zpet8XKhdsOXZ9svxEaoxovXqY+dWlwmAJWYzDwKr27vuCMHNeU1yaKpcZAoxzVm4dCGm49/3Y6jFxrPN7tyc0wwSTg2alv7TmNGBAER2WvHYMsJGQOXzhBJf3BmKGCmLgUbts/7x0TdOQRqYHzdxL7uIEyM1shfU73jv04B3xVZh7I3UdL2UUkvQzVaVOPBFzSMBa4Nx1h0sYJ9ni5gtooqWuGt3cGxSC7SgpjTY7hcr44W+lu922Q+UUlxoyCAW7m1ZunJRGG79QW3/YsZlk1LWdNQaXneJsmz9j1XvJsJBm7drWw5mCi1GrU/ZGcin8Jgjj+KBcWlv9bB9KZO4d+LX4YaURKng7CrvVyFRxHFmatF9yhc6pmmK00k5RWUhHG74XPTwZgmG8tWnnx5CQ/3ooo8uwnY8p1la6loElglu1crHxsIWUcRMc5oqFEVQCszzXw1oz12KYrHRwqiwE69nuEX9EMnSVE/a6treNCCZLi5GKfsfubIHVLu8TZeHY6V7zh3vzkKQMgV82yrUXgMAlC6UbF9vhD2i1N/mpa/DXBaePPjNKgi49v9wz6dJ9DIOLwC/vrbZTJC7mZwXn4nPlJB2MAjv/DsEla6Tbu7LtQUQf1uEVQFmo8t/8vfnvMoiCfqU4O5pwe03uDTLF7HMAVzr81jUcd/3MCH+mFEEI3dv2w8tlRYp+dcL8CYOPqdTTg5SFgd+emp+xkKpJPKmH/nKS9b5T7PzGpHhEpVYAYoCPHWs//lxJkOlwUql6l4t0CTOhH+ctZ63xF4zx61CGvcj7A/655lFD9vZ9qz5d7A3rEjyv28F5vNKO4gZl2LjSPvpseyzdGzjFzV0g5hYyOa3YYfv39o0VBrvgfaV9DeFnkoToLOjW1pn49JfotQvWh5EuV9pR3CBd8Guu/RaTzwz1+kO1dI2o4PNG4cZ26B/sMlPwx39sBSAmeuNnf3kstjQZNY7zdmWhKoRJya8c+8Mj2wIrBY5uDh08sg51qZ/eqMr8o/KMUT/vZ1or7edvIUZcKtd68BELkRxVCmG3twhnDAqOa2H50l3pnOkWHY28ahA/ZqFSFctuj4C5cBRgN29557FYaT9/C0avKtX9mD5ioVKV8ndKVT6lhsN6aFU/wqTUDyHYdQqX0aeWtjtQZipVqYTtuaoYLlOOsOyXa0OEaUKOX0D9xCm85p/aEu9gCjFTlWChKgQLEO1/KDrrgIuktA1B1PJKfYjEvR5fKlXJh93LRVeC26D8sFSsXSjfommr7wpvwOwwzI4xF/euKh2sZ31vOwbz3XthsNcZ3+kLYpLEnJ7BjfOwti65uH+8I5Uw+R8BntsvwbgdeoeRZuoIwYR0m8DIK2xMVPp3dw6ZNJSqVP1qZYiIpARpLnZPN63CdiQ/F+KtFDCu+LUhhn8ok+lAwJmqVJSqQLXsEBFy2iwU2r0GTNYrFoa16maE4R9mxeS0cXajKgJqQNN1DOJ6UAwm1OQsIY5izqucXwJUR3e9BUXsnbNQFX12HtHoXVl+/gWCps4SEs7M+eVZUARKOe4O2sDjijVTFUlnqkIkO/PsfB9IRk09URb2O97Z3WsGUO5xvWZ7M1XhxBW6K9g7z3L6wE3UErzhfd1r3bmEDCrwVtez2z1ONGJwQ1J4stkNf420ZBTul2GHbeduKst1Eww7drE7gZRzSGeN7af1YqYbUQFWvyR6h2j7jw1fGoa9bcvq7KrwmiDqqoBnlG8WBj1gEp4oGZ0RDwrO3YYvMVMVqzNmglFKIGeyN/DDzQlwBUre2bVhYO8Pbz9yFxpcqYpTrPRnXTMcICRw1C2E7V2QOONuGDn2/lLDlxIWKbBSFW8tEpquAQKJiA4LxU6fJSuS+Z3drLW9VIugHJlKVcJMM6IU6BqkmPCX2TD/3pVypRsSHmTsBGdLcyMYQVvZbkmpCiUcIjWF6PhDMbPDXEES5yhuaHmd66WPGsO9fd/eHAEOGKOaiuVebVSDQU8w7ibOUYDZLs1OO7toaSMEcW7guNj2M68WqmJgPKkVwp+GyZw+MNvoHvj5RYe3EhlISHQY+H4xXoSp+sxPFNuT5L6wjYCsv7k1Tyu4WnmEt/JWwR9Ei3Ii3RuU7PoueGAHYNVRMsLjWnFzij99JKgfWH4h2P60BxOdlbq1E2YmoIh2H4hQ1Nuo5vfma25WjX+VtwttK1iDiz7E6w9V58ylekLPqOuAy61a2IzmE2boePLM8q6OAufl7JV7XOjHtWblbPXr2A+iEyRVEni1MEGf1bELwejIqozVU2pI8rw+q0887SC/Ch1zOM57h2w+h6ZSlWJnFwyC2taNhVPHrno9mcwH9AYDI70VlPqLt5RFaxmlKmj2DrMp0LR5HXuarANcd8CSNV4HpfFCKGd17DMgh7af6SmhaWyH7YNTZiZw2+J34Kz318/uYh0zaBxvWs4ah3ArYw1iJqOd3KzilOAJBDcWxgO/M4HGoo59FQMMd/OzZIP1s1Zi6tgPAjUYZ/xgCg0mR04h7MZAYHDiFNYaYLxhly8TdQ72PtRim2Z9v2fqoPfBtrsjSLXZ+yNKN+9PLJzHMCnnRR5CScgkG+xHUqmKPatjU4Ewe+c5J0PHapaTU8d+EMLkRcfbYZJd5T7VsVF0VXBevwnKG0MgklLHfhBi4Led0iGI+lm/tFAVEfl2odi2burYyc2ZFmAE1zJBC4yz9u91bBoNbJUfbo4RVss06VqqltlOKb+uVKV09UlVTLaeb3drLUJkcurYDyK16MorvW9atv+7qhgmvygWxxESmICk1LEfhMg9y646VrU2VKli0lXlPgypFl3T9+ungIPEq8p9MIpPvit4B+uz7hiQkO6Y/w2O+fOztedcSqEldMv+cSgzJOBMCoYRIklXlZSUlJSUlJSUlJSUlJSUlJSUBMIokEjXDOHq0tR1ZhLGDZPgJPYm3o/Be5IQl0V7GEdx/K+fG67U0Z7+7ViIXx01hHDRdBOD42fFsJi5aJjR36NvaON/csR1Q4CPHtDHLb3h9q7+DRq5JHdH3WX30tWZwB9zAK/3oZDg+6aysJGkU4ePg7cuieEyMAwhGPeB0QDf/wQazxLcwncXuHVEsIvByANgfM0k3dv597dlIdg64rP/azHNAHhS/eG3o06/Ab8tC0fdSLlEsNUF4OS69/HnyJXfloU4+m46O7j9w1v1lL4HTAiuf1sWuvg0sz4cXZ9Hko1b8z53s/Fj/O34Q0bd7//z5uhtLAh4MZ5bSBqHj7weM2m4UiIgIRba7JT+vDiMKKDfTiGcQKyiUkbU+tPI4p0tkJLVfk3p/4RkmiCmznVJGV9YKBHhaSE8JSUlJSUlJSUlJSUlJSUl5f8R/wcoCm8pr8aXIwAAAABJRU5ErkJggg==" width='44px'></img><p id="text">UPI</p></a></div>
              </div>
            </div>
            <button id="paynow">Pay &#x20b9; {totalprice}</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Method;