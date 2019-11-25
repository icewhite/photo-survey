import React, { useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {
  Root,
  Header,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon
} from "@mui-treasury/layout";
import {
  defaultLayoutPreset,
  standardLayoutPreset,
  fixedLayoutPreset,
  contentBasedLayoutPreset,
  cozyLayoutPreset,
  muiTreasuryPreset
} from "@mui-treasury/layout/presets";
import { MemoryRouter } from "react-router-dom";

import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";
import HeaderEx from "./components/HeaderEx";
import ContentForm from "./components/ContentForm";
import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";
import Camera from "./components/Camera";
import Checklist from "./components/Checklist";
import Routes from "./Routes";
import config from "./config";

import "./styles.css";

const presets = {
  createDefaultLayout: defaultLayoutPreset,
  createStandardLayout: standardLayoutPreset,
  createFixedLayout: fixedLayoutPreset,
  createContentBasedLayout: contentBasedLayoutPreset,
  createCozyLayout: cozyLayoutPreset,
  createMuiTreasuryLayout: muiTreasuryPreset
};

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
function App() {
  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("createStandardLayout");
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });

  const handlePhotoCaptured = photo => {
    console.log(`photy: ${photo}`);
  };

  return loading ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant={"h2"}>Changing Preset...</Typography>
    </div>
  ) : (
    <Root config={presets[preset]}>
      {({ headerStyles, sidebarStyles }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <CollapseBtn
                component={IconButton}
                className={headerStyles.leftTrigger}
              >
                <CollapseIcon />
              </CollapseBtn>
              <SidebarTrigger className={headerStyles.leftTrigger}>
                <SidebarTriggerIcon />
              </SidebarTrigger>
              {data.header && <HeaderEx />}
            </Toolbar>
          </Header>
          <Content>
            {false && (
              <ContentForm
                preset={preset}
                onChangePreset={val => {
                  setLoading(true);
                  setPreset(val);
                  setTimeout(() => setLoading(false), 500);
                }}
                data={data}
                onChangeData={setData}
              />
            )}
            <Routes />

            {false && (
              <Camera height={200} onPhotoCaptured={handlePhotoCaptured} />
            )}
            {false && <Checklist data={config.job.checklist} />}
            {data.content && false && <ContentEx />}
          </Content>
          <Sidebar>
            {({ collapsed }) => (
              <>
                <NavHeaderEx collapsed={collapsed} />
                <div className={sidebarStyles.container}>
                  {data.nav && <NavContentEx />}
                </div>
                <CollapseBtn className={sidebarStyles.collapseBtn}>
                  <CollapseIcon />
                </CollapseBtn>
              </>
            )}
          </Sidebar>
          <Footer>{data.footer && <FooterEx />}</Footer>
        </>
      )}
    </Root>
  );
}

const Main = () => {
  return (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
