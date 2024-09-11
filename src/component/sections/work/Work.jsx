import React ,{useState}from "react";
import "../../../style/style.scss";
import Button from "@mui/material/Button";
import { workData } from "./workData";

export default function Work() {
  const [workItems, setWorkItems] = useState(workData);

  //filter displayed works based on selected category
  const filterItemHandle = (categoryItem)=>{
    const updatedWorkItems = workData.filter((curEle)=>{
      return curEle.category.includes(categoryItem)
    })

    setWorkItems(updatedWorkItems)
  }

  return (
    <div className="work-wrapper" id="work">
      <div className="work">
        <div className="work-header">
          My Creative <span> Portfolio </span>Section
        </div>
        <div className="work-components">
          <div className="tabs-wrapper">
            <div className="tabs">
              <Button variant="outlined" className="tab" onClick={()=>setWorkItems(workData)}>
                all
              </Button>
              <Button variant="outlined" className="tab" onClick={()=>filterItemHandle("html")}>
                html
              </Button>
              <Button variant="outlined" className="tab" onClick={()=>filterItemHandle("css")}>
                css
              </Button>
              <Button variant="outlined" className="tab" onClick={()=>filterItemHandle("javascript")}>
                javascript
              </Button>
              <Button variant="outlined" className="tab" onClick={()=>filterItemHandle("react.js")}>
                react.js
              </Button>
              <Button variant="outlined" className="tab" onClick={()=>filterItemHandle("redux")}>
                redux
              </Button>
              <Button variant="outlined" className="tab" onClick={()=>filterItemHandle("node.js")}>
                node.js
              </Button>
            </div>
          </div>
          <div className="webs-wrapper">
            <div className="webs">
              {/* <div className="web">
                    <div className="iframe-wrapper">
                        <iframe src="https://vivaeyewears.netlify.app/" title="VivaEyeWear" scrolling="no"></iframe>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="https://vivaeyewears.netlify.app/" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/users/1896581/screenshots/9805821/media/d1afbc098916127cd0afa3b06b0fdfc2.gif" alt="" /></div></a>
                        <a href="https://github.com/seecbb007/vivaeyewear" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif" alt="" /></div></a>
                    </div>
                    <div className="work-name">VivaEyeWear</div>
                    <div className="work-desc">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</div>
                </div>
                <div className="web">
                    <div className="iframe-wrapper">
                        <iframe src="https://sneatweb.netlify.app/" title="VivaEyeWear" scrolling="no"></iframe>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="https://sneatweb.netlify.app/" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/users/1896581/screenshots/9805821/media/d1afbc098916127cd0afa3b06b0fdfc2.gif" alt="" /></div></a>
                        <a href="https://github.com/seecbb007/sneatweb" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif" alt="" /></div></a>
                    </div>
                    <div className="work-name">Sneat</div>
                    <div className="work-desc">Sneat - Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.</div>
                </div>
                <div className="web">
                    <div className="iframe-wrapper">
                        <iframe src="https://covillamain.netlify.app/" title="VivaEyeWear" scrolling="no"></iframe>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="https://covillamain.netlify.app/" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/users/1896581/screenshots/9805821/media/d1afbc098916127cd0afa3b06b0fdfc2.gif" alt="" /></div></a>
                        <a href="https://github.com/seecbb007/covillaWeb" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif" alt="" /></div></a>
                    </div>
                    <div className="work-name">Covilla Travel</div>
                    <div className="work-desc">The website likely features a clean and intuitive interface, making it easy for users. Detailed information about each country, including popular tourist spots, cultural highlights, local cuisine, and must-see landmarks. to navigate and find information about popular travel destinations.</div>
                </div>
                <div className="web">
                    <div className="iframe-wrapper">
                        <iframe src="https://weatherstackmain.netlify.app/" title="VivaEyeWear" scrolling="no"></iframe>
                    </div>
                    <div className="buttons-wrapper">
                        <a href="https://weatherstackmain.netlify.app/" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/users/1896581/screenshots/9805821/media/d1afbc098916127cd0afa3b06b0fdfc2.gif" alt="" /></div></a>
                        <a href="https://github.com/seecbb007/weatherStack" target="_blank"><div className="button-img"><img src="https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif" alt="" /></div></a>
                    </div>
                    <div className="work-name">WeatherStack</div>
                    <div className="work-desc">Get current weather information, historical data and forecasts using weatherstack - a free world weather REST API supporting millions of global locations.</div>
                </div> */}
              {workItems.map((workItem, i) => {
                const {
                  id,
                  webLink,
                  title,
                  githubLink,
                  workName,
                  workDesc,
                  category,
                } = workItem;
                return (
                  <div className="web" key={id}>
                    <div className="iframe-wrapper">
                      <iframe
                        src={webLink}
                        title={title}
                        scrolling="no"
                      ></iframe>
                    </div>
                    <div className="buttons-wrapper">
                      <a
                        href={webLink}
                        target="_blank"
                      >
                        <div className="button-img">
                          <img
                            src="https://cdn.dribbble.com/users/1896581/screenshots/9805821/media/d1afbc098916127cd0afa3b06b0fdfc2.gif"
                            alt=""
                          />
                        </div>
                      </a>
                      <a
                        href={githubLink}
                        target="_blank"
                      >
                        <div className="button-img">
                          <img
                            src="https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div className="work-name">{workName}</div>
                    <div className="work-desc">
                      {workDesc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
