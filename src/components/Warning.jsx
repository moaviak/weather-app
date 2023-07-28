const Warning = ({ setNotFound }) => {
  return (
    <div className="absolute top-8 flex items-center justify-between px-4 py-2 bg-red-300 rounded-lg">
      <p className="text-red-600 leading-4 mr-10">
        Unable to Find the City - Please Try Again...!
      </p>
      <button
        className="leading-3 text-red-50 border border-red-50 rounded-full px-2 pb-2 pt-1"
        onClick={() => setNotFound(false)}
      >
        x
      </button>
    </div>
  )
}

export default Warning
