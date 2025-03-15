const TrafficChart = ({ data = [] }) => {
  const maxValue = Math.max(...data)
  const chartHeight = 60

  return (
    <div className="mt-4">
      <div className="flex items-end space-x-2 h-[60px]">
        {data.map((value, index) => {
          const height = (value / maxValue) * chartHeight
          return (
            <div
              key={index}
              className="bg-blue-200 hover:bg-blue-300 transition-all w-full"
              style={{ height: `${height}px` }}
              title={`Value: ${value}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TrafficChart
