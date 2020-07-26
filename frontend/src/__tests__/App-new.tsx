import React from "react";
import { shallow, mount } from "enzyme";
import Home from "../pages/Home";
import { Upload } from "antd";

describe("Home", () => {
  let wrapper: any;
  let file: File;
  let input: any;
  let upload: any;
  
  wrapper = mount(<Home/>);
  it("Demo Image and Upload Button", () => {
    expect(wrapper.find('.ant-card-cover')).toHaveLength(1)
  })
  it("On file selected", async () => {
    input = wrapper.find(Upload).find("input[type='file']");
    upload = wrapper.find(Upload);
  
    expect(wrapper.find('.ant-upload-list-item-name-icon-count-1')).toHaveLength(0)
    file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
    input.simulate("change", { target: { files: [file], } });
    expect(wrapper.find('.ant-upload-list-item-name-icon-count-1')).toHaveLength(1);
  });
});