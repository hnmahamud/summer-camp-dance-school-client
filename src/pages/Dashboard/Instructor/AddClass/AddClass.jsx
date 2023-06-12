import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
  const { user } = useAuth();

  const [nLoading, setNLoading] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const handleImageChange = (image) => {
    setText(image.name);
    setImage(image);
  };

  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", image);

    setNLoading(true);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostingToken}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const newItem = {
            className: data.className,
            classImage: result.data.display_url,
            instructorName: data.instructorName,
            instructorEmail: data.instructorEmail,
            availableSeats: parseInt(data.availableSeats),
            price: parseFloat(data.price),
            status: "pending",
          };
          axiosSecure
            .post("/classes", newItem)
            .then((data) => {
              setNLoading(false);
              reset();
              setText("");
              console.log(data);
              Swal.fire("Added!", "Class has been added.", "success");
            })
            .catch((error) => {
              setNLoading(false);
              console.log(error);
            });
        }
      })
      .catch((error) => {
        setNLoading(false);
        console.error("Error:", error);
      });
  };

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Class Name
              </label>
              <input
                {...register("className")}
                type="text"
                name="className"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type class name"
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Instructor name
              </label>
              <input
                {...register("instructorName")}
                defaultValue={user?.displayName}
                type="text"
                name="instructorName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Instructor name"
                required
                readOnly
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Instructor email
              </label>
              <input
                {...register("instructorEmail")}
                defaultValue={user?.email}
                type="email"
                name="instructorEmail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Instructor email"
                required
                readOnly
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Available seats
              </label>
              <input
                {...register("availableSeats")}
                type="number"
                name="availableSeats"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Available seats"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Price
              </label>
              <input
                {...register("price")}
                type="number"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Price"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Class Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-2 pb-3">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      {text}
                    </p>
                  </div>
                  <input
                    {...register("image")}
                    onChange={(event) => {
                      handleImageChange(event.target.files[0]);
                    }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          {nLoading ? (
            <span className="loading loading-ring loading-lg ml-6 mt-4 sm:mt-6"></span>
          ) : (
            <button
              type="submit"
              className="bg-primary inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
            >
              Add Class
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddClass;
