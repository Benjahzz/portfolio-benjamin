

export default function Loading() {
  return (
    <div className='loader bg-primary z-30'>
      <svg
        width="78"
        height="127"
        viewBox="0 0 78 127"
        className="text-black dark:text-white"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.19946 94.3262L14.8596 105.858V126.307L0 105.858L4.19946 94.3262Z"
          fill="currentColor"
        />
        <path
          d="M19.3823 106.737L68.4838 91.7421L77.5288 104.663L19.3823 126.63V106.737Z"
          fill="currentColor"
        />
        <path
          d="M60.7306 94.762L77.5284 84.6353V104.664L60.7306 94.762Z"
          fill="currentColor"
        />
        <path
          d="M36.8259 57.5005L77.5284 84.6355L65.8991 94.9727L36.8259 78.8209V57.5005Z"
          fill="currentColor"
        />
        <path
          d="M57.5002 40.3797L70.4217 32.3038V73.6523L57.5002 65.8995V40.3797Z"
          fill="currentColor"
        />
        <path
          d="M24.5507 -6.10352e-05L70.0987 27.781L55.2391 38.4412L24.5507 21.3203V-6.10352e-05Z"
          fill="currentColor"
        />
        <path
          d="M10.6602 22.6126L31.0114 33.5958V100.787L10.6602 89.158V22.6126Z"
          fill="currentColor"
        />
      </svg>
      <p className="text-black dark:text-white">Loading...</p>
    </div>

  )
}
