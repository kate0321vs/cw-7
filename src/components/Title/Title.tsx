interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <h3 className="title">{text}</h3>
  );
};

export default Title;