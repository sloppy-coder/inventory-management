import React from "react";
import { Form, Input, Select, InputNumber, Upload, Button, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useApp } from "../../../../Context";
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  // console.log(values);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const NewItem = ({ name, showQuantityPrice }) => {
  const [form] = Form.useForm();
  const { ItemData, setItemData, ItemGroups, setItemGroups } = useApp();
  const handleReset = () => {
    form.resetFields();
  };
  const handleSubmit = (formValueArray) => {
    console.log(formValueArray);
    if (name === "Item Name") {
      setItemData([...ItemData, formValueArray]);
    } else {
      setItemGroups([...ItemGroups, formValueArray]);
    }
  };

  return (
    <Form
      form={form}
      name="validateOnly"
      layout="horizontal"
      autoComplete="off"
      wrapperCol={{
        span: 18,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        label={`${name}`}
        name="Name"
        rules={[
          {
            required: true,
          },
        ]}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Type"
        name="Type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      {showQuantityPrice && (
        <Form.Item>
          <Form.Item
            label="Item Group"
            name="ItemGroup"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="demo">None</Select.Option>
            </Select>
          </Form.Item>
          <div className="flex flex-row gap-4">
            <Form.Item
              label="Quantity"
              name="Quantity"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Price"
              name="Price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </div>
        </Form.Item>
      )}

      <Form.Item label="Description" name="description">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Upload Images"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        name="photos"
      >
        <Upload action="/upload.do" listType="picture-card">
          <button
            style={{
              border: 0,
              background: "none",
            }}
            type="button"
          >
            <PlusOutlined />
          </button>
        </Upload>
      </Form.Item>
      <div className="flex justify-end">
        <Form.Item>
          <Space>
            <div className="flex flex-row gap-2 p-2">
              <SubmitButton form={form}>Submit</SubmitButton>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          </Space>
        </Form.Item>
      </div>
    </Form>
  );
};

export default NewItem;
