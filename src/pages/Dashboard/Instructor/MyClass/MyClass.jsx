const MyClass = () => {
  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Name
          </th>
          <th scope="col" class="px-6 py-3">
            Available Seats
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            Status
          </th>
          <th scope="col" class="px-6 py-3">
            Total Enrolled
          </th>
          <th scope="col" class="px-6 py-3">
            Feedback
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-1.jpg"
            />
            <div class="pl-3">
              <div class="text-base font-semibold">Neil Sims</div>
            </div>
          </th>
          <td class="px-6 py-4">React Developer</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              Online
            </div>
          </td>
          <td class="px-6 py-4">React Developer</td>
          <td class="px-6 py-4">React Developer</td>
          <td class="px-6 py-4">React Developer</td>
          <td class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit user
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyClass;
