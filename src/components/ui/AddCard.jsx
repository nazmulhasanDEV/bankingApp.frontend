import Card from "antd/es/card/Card";

const AddCard = ({
  img = "",
  title = "No Customer found",
  description = "Add your first customer now.",
  btnText = "Add customer",
  onClickOpen
}) => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center space-y-4 py-4">
        <p><img src={img} className="" alt="User cross" /></p>
        <p className="font-semibold text-2xl text-darkGray text-center">{title}</p>
        <p className="font-medium text-sm text-gray text-center">{description}</p>
        <button className="btn-primary" onClick={onClickOpen}>+ {btnText}</button>
      </div>
    </Card>
  );
};

export default AddCard;