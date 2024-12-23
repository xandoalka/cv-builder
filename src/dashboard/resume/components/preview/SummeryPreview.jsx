/* eslint-disable react/prop-types */

const SummeryPreview = ({resumeInfo}) => {
  return (
    <p className="text-xs">
      {resumeInfo?.summery}
    </p>
  )
}

export default SummeryPreview
