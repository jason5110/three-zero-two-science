import GridThirteenItemCard from "@/components/GridThirteenItemCard";
import useInvisable from "@/hooks/useInvisable";

const ScienceContainer = () => {
  const {invisable, setInvisable} = useInvisable()

  return (
    <GridThirteenItemCard
      num={7}
      hidden={invisable}
      title="302 Science"
      closeButtonClick={() => setInvisable(true)}
    >
      <div>ScienceContainer</div>
      <button>Click me</button>
    </GridThirteenItemCard>
  )
}

export default ScienceContainer
