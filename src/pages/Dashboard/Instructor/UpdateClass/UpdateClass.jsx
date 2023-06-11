import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

const UpdateClass = () => {
  const { id } = useParams();

  const [axiosSecure] = useAxiosSecure();
  const {
    data: singleClass = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["class", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/class/${id}`);
      return response.data;
    },
  });

  const [nLoading, setNLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setNLoading(true);

    const updateItem = {
      className: data.className,
      availableSeats: parseInt(data.availableSeats),
      price: parseFloat(data.price),
    };
    axiosSecure
      .patch(`/classes/${id}`, updateItem)
      .then((data) => {
        refetch();
        setNLoading(false);
        console.log(data);
        Swal.fire("Updated!", "Class has been updated.", "success");
        navigate("/dashboard/my-class", { replace: true });
      })
      .catch((error) => {
        setNLoading(false);
        console.log(error);
      });
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Update a Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Class Name
              </label>
              <input
                {...register("className")}
                defaultValue={singleClass?.className}
                type="text"
                name="className"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type class name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Available seats
              </label>
              <input
                {...register("availableSeats")}
                defaultValue={singleClass?.availableSeats}
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
                defaultValue={singleClass?.price}
                type="number"
                name="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Price"
                required
              />
            </div>
          </div>
          {nLoading ? (
            <span className="loading loading-ring loading-lg ml-6 mt-4 sm:mt-6"></span>
          ) : (
            <button
              type="submit"
              className="bg-primary inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
            >
              Update Class
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default UpdateClass;
