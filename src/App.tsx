import { BrowserRouter, Route, Router, Routes } from "react-router";
import { Accordion } from "./accordion";
import { DateTimeInput } from "./date-time-input";
import { LabelText } from "./label-text";
import { ElFeature, elIcon } from "./styles";
import { Tabs } from "./tabs";
// import { TabContent } from "./tabs/tab-content";
// import { TabMenu } from "./tabs/tab-item";
// import { TabNavigation } from "./tabs/tab-navigation";
// import { TabPanel } from "./tabs/tab-panel";
// import { TabsRouter } from "./tabs/tabs-router";



const App = () => {
  return (
    <div>
      <DateTimeInput
        {...{
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'small',
          helperText: "This is a long optional helper text that won’t fit in a single row"

        }}
      />
      <DateTimeInput
        {...{
          type: 'time',
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'small',
          helperText: "This is a long optional helper text that won’t fit in a single row"

        }}
      />
      <DateTimeInput
        {...{
          type: 'time',
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'large',
          helperText: "This is a long optional helper text that won’t fit in a single row"

        }}
      />
      <DateTimeInput
        {...{
          type: 'time',
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'large',
          helperText: "This is a long optional helper text that won’t fit in a single row",
          isError: true
        }}
      />

      <Accordion.Group>
        <Accordion>
          <Accordion.Header>
            <LabelText variant="strong">Lorem ipsum dolor sit amet</LabelText>
            <Accordion.Legend>
              <LabelText >3</LabelText>
            </Accordion.Legend>
          </Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            <LabelText variant="strong">Lorem ipsum dolor sit amet</LabelText>
            <Accordion.Legend>
              <ElFeature>
                <svg className={elIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.3333 10C15.3295 9.98243 15.3295 9.96425 15.3333 9.94668V9.85334C15.3302 9.84246 15.3302 9.8309 15.3333 9.82001L14 5.89334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66666C3.1939 1.33334 2 2.52725 2 4.00001V5.89334L0.699997 9.78668C0.703146 9.79757 0.703146 9.80912 0.699997 9.82001V9.91334C0.698566 9.94508 0.686868 9.97549 0.666664 10V12C0.666664 12.7364 1.26362 13.3333 2 13.3333V14C2 14.3682 2.29847 14.6667 2.66666 14.6667C3.03485 14.6667 3.33333 14.3682 3.33333 14V13.3333H12.6667V14C12.6667 14.3682 12.9651 14.6667 13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14V13.3333C14.7364 13.3333 15.3333 12.7364 15.3333 12V10ZM3.14666 6.66668H12.8533L13.74 9.33334H2.26L3.14666 6.66668ZM3.33333 4.00001C3.33333 3.26363 3.93028 2.66668 4.66666 2.66668H11.3333C12.0697 2.66668 12.6667 3.26363 12.6667 4.00001V5.33334H3.33333V4.00001ZM2 12V10.6667H14V12H2Z" fill="#9FAEBC" />
                </svg>
                <LabelText >3</LabelText>
              </ElFeature>
              <ElFeature>
                <svg className={elIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.3333 10C15.3295 9.98243 15.3295 9.96425 15.3333 9.94668V9.85334C15.3302 9.84246 15.3302 9.8309 15.3333 9.82001L14 5.89334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66666C3.1939 1.33334 2 2.52725 2 4.00001V5.89334L0.699997 9.78668C0.703146 9.79757 0.703146 9.80912 0.699997 9.82001V9.91334C0.698566 9.94508 0.686868 9.97549 0.666664 10V12C0.666664 12.7364 1.26362 13.3333 2 13.3333V14C2 14.3682 2.29847 14.6667 2.66666 14.6667C3.03485 14.6667 3.33333 14.3682 3.33333 14V13.3333H12.6667V14C12.6667 14.3682 12.9651 14.6667 13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14V13.3333C14.7364 13.3333 15.3333 12.7364 15.3333 12V10ZM3.14666 6.66668H12.8533L13.74 9.33334H2.26L3.14666 6.66668ZM3.33333 4.00001C3.33333 3.26363 3.93028 2.66668 4.66666 2.66668H11.3333C12.0697 2.66668 12.6667 3.26363 12.6667 4.00001V5.33334H3.33333V4.00001ZM2 12V10.6667H14V12H2Z" fill="#9FAEBC" />
                </svg>
                <LabelText >2</LabelText>
              </ElFeature>
            </Accordion.Legend>

          </Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Accordion.Body>
        </Accordion>
        <Accordion>
          <Accordion.Header>
            Lorem ipsum dolor sit amet
          </Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Accordion.Body>
        </Accordion>
      </Accordion.Group>

      <div><h1>Tabs </h1></div>
      <BrowserRouter >
        <Tabs variant="default">
          <Tabs.Item href="/tabpanel-1" >Default tab item 1</Tabs.Item>
          <Tabs.Item href="/tabpanel-2" >Default tab item 2</Tabs.Item>
          <Tabs.Item href="/tabpanel-3" isDisabled>Default tab item 3</Tabs.Item>
          <Tabs.Item href="/tabpanel-4" >Default tab item 4</Tabs.Item>
          <Tabs.Item href="/tabpanel-5" >Default tab item 5</Tabs.Item>
        </Tabs>
        <Routes>
          <Route path="tabpanel-1" element={<div>Content 1</div>} />
          <Route path="tabpanel-2" element={<div>Content 2</div>} />
          <Route path="tabpanel-3" element={<div>Content 3</div>} />
          <Route path="tabpanel-4" element={<div>Content 4</div>} />
          <Route path="tabpanel-5" element={<div>Content 5</div>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
