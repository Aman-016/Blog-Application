import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'uncategorized',
    content: '',
  });
  const [file, setFile] = useState(null);

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create a post
      </h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <TextInput
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button gradientDuoTone="purpleToBlue" outline>
            Upload Image
          </Button>
        </div>

        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(value) =>
            setFormData({ ...formData, content: value })
          }
          placeholder="Write something..."
          className="h-72 mb-12"
        />

        <Button gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}
