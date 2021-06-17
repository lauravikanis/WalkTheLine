import { WarnNote } from "./Note";

const ErrorNote: any = () => {
  return (
    <WarnNote>
      <h4> ! Achtung ! </h4>
      <p>Ein Fehler ist aufgetreten</p>
    </WarnNote>
  );
};

export default ErrorNote;
