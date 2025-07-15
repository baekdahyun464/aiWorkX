import './check-radio.scss';

type RadioProps = {
  id: string;
  name: string;
  text: string;
};

export default function Radio({ id, name, text }: RadioProps) {
  return (
    <>
      <input type="radio" id={id} name={name} hidden />
      <label htmlFor={id}>{text}</label>
    </>
  );
}
