import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Upload,
  Button,
  Space,
  message,
  Spin,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useApp } from "../../../../Context";

const cloudName = "dihhauu5d";
const uploadPreset = "lus0hb1j";
const { TextArea } = Input;

const SubmitButton = ({ form, children, loading }) => {
  const [submittable, setSubmittable] = useState(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable || loading}>
      {children}
    </Button>
  );
};

const NewItem = ({ name, showQuantityPrice }) => {
  const [form] = Form.useForm();
  const { ItemData, setItemData, ItemGroups, setItemGroups } = useApp();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    form.resetFields();
    setImages([]);
  };

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImages((prevImages) => [
        ...prevImages,
        { file, preview: reader.result, uid: file.uid },
      ]);
    };
    reader.readAsDataURL(file);
    return false; // Prevent automatic upload
  };

  const handleRemoveImage = (file) => {
    setImages((prevImages) => prevImages.filter((img) => img.uid !== file.uid));
  };

  const handleSubmit = async (formValues) => {
    setLoading(true); // Start loader

    try {
      const imageUrls = await Promise.all(
        images.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image.file);
          formData.append("upload_preset", uploadPreset);

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          const data = await response.json();
          return data.secure_url;
        })
      );
      let key = ItemGroups.length + 1;
      if (name === "Item Name") {
        key = ItemData.length + 1;
      }
      const finalData = {
        ...formValues,
        key: key,
        photos: imageUrls,
      };
      if (name === "Item Name") {
        setItemData([...ItemData, finalData]);
      } else {
        setItemGroups([...ItemGroups, finalData]);
      }

      message.success("Item saved successfully!");
      handleReset();
    } catch (error) {
      message.error("Failed to save item.");
    } finally {
      setLoading(false); // Stop loader
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
      disabled={loading}
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
        getValueFromEvent={(e) => e?.fileList}
        name="photos"
      >
        <Upload
          listType="picture-card"
          beforeUpload={handleImageChange}
          onRemove={handleRemoveImage}
        >
          {images.length >= 8 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <div className="flex justify-end">
        <Form.Item>
          <Space>
            <div className="flex flex-row gap-2 p-2">
              <Spin spinning={loading}>
                <SubmitButton form={form} loading={loading}>
                  Submit
                </SubmitButton>
              </Spin>
              <Button onClick={handleReset} disabled={loading}>
                Reset
              </Button>
            </div>
          </Space>
        </Form.Item>
      </div>
    </Form>
  );
};

export default NewItem;
