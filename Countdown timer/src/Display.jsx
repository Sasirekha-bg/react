

export default function Display({days,hours,min,sec}) {
  return (
    <div className="display">
        <div>
            <h1 className="value">{days}</h1>
            <p>Days</p>
        </div>
        <div>
            <h1 className="value">{hours}</h1>
            <p>Hours</p>
        </div>
        <div>
            <h1 className="value">{min}</h1>
            <p>Minutes</p>
        </div>
        <div>
            <h1 className="value">{sec}</h1>
            <p>Seconds</p>
        </div>

    </div>
  )
}
