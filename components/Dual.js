import CountryFlag from 'react-country-flag';

export default function ({ teamA, teamB }) {
  const statusIcons = (
    <div className="flex flex-row justify-evenly inset-x-0 -top-4 absolute">
      <div className="rounded-full h-8 w-8 border border-solid grid content-center justify-items-center bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" text-yellow-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="rounded-full h-8 w-8 border border-solid grid content-center justify-items-center bg-white">
        <svg
          className=" text-yellow-600 h-6 w-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.5 6.09143L7.21997 10.8114L12.0005 6.03088L16.7811 10.8114L21.5 6.09245V14.9691C21.5 16.626 20.1569 17.9691 18.5 17.9691H5.5C3.84314 17.9691 2.5 16.626 2.5 14.9691V6.09143ZM19.5 10.9087V14.9691C19.5 15.5214 19.0523 15.9691 18.5 15.9691H5.5C4.94771 15.9691 4.5 15.5214 4.5 14.9691V10.9077L7.21997 13.6277L12.0005 8.84717L16.7811 13.6277L19.5 10.9087Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="rounded-full h-8 w-8 border border-solid grid content-center justify-items-center bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" text-yellow-600 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
    </div>
  );
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div className="bg-green-500 aspect-w-1 aspect-h-1 w-full   border-solid border-white border-2 rounded-xl relative">
        <CountryFlag
          countryCode={teamA}
          svg
          className="object-cover w-full h-full"
          title={teamB}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
        {statusIcons}
      </div>
      <div className="bg-green-500 aspect-w-1	 aspect-h-1 w-full   border-solid border-white border-2 rounded-xl relative">
        <CountryFlag
          countryCode={teamB}
          svg
          className="object-cover w-full h-full"
          title={teamB}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
        {statusIcons}
      </div>
    </div>
  );
}
