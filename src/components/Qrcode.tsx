import GridThirteenItemCard from "@/components/GridThirteenItemCard";
import BackToClassListButton from "./BackToClassListButton";

const Qrcode = () => {
  return (
    <GridThirteenItemCard
      header={<BackToClassListButton />}
      num={6}
      title="Join 302 Science"
    >
      <div>ID: X58E9647</div>
      <div>Link</div>
      <div>Version 1.1.17</div>
    </GridThirteenItemCard>
  )
}

export default Qrcode
