import { useEffect, useState } from 'preact/hooks'

export function ExampleFetch() {
  const [fetchedData, setFetchedData] = useState<{
    results: { email: string }[]
  }>()

  const fetchFn = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data)
    setFetchedData(data)
  }

  return (
    <div className={'py-4'}>
      <button
        className={'border-2 border-white rounded-md p-2 uppercase'}
        onClick={() => fetchFn()}
      >
        Fetch
      </button>
      {fetchedData && (
        <div className={'py-2 text-xl md:text-2xl font-extralight'}>
          Data fetched at runtime: {fetchedData.results[0].email}
        </div>
      )}
    </div>
  )
}
