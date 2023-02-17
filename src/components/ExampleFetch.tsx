import { useEffect, useState } from 'preact/hooks'

export function ExampleFetch() {
  const [buttonClicked, setButtonClicked] = useState(false)
  const [fetchedData, setFetchedData] = useState<{
    results: { email: string }[]
  }>()

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()
      console.log(data)
      setFetchedData(data)
    }

    buttonClicked && fetchFn()
  }, [buttonClicked])

  return (
    <div className={'py-4'}>
      <button
        className={'border-2 border-white rounded-md p-2 uppercase'}
        onClick={() => setButtonClicked(true)}
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
