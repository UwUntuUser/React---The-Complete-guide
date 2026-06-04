import Button from "../util/Button/Button";
import "./CreateProjectDialog.css";

export default function CreateProjectDialog({
  ref,
  titleRef,
  descriptionRef,
  onNewProjectSave,
  onCloseDialog,
}) {
  return (
    <dialog ref={ref}>
      <div>
        <p>TITLE</p>
        <input ref={titleRef}></input>
      </div>
      <div>
        <p>DESCRIPTION</p>
        <input ref={descriptionRef}></input>
      </div>
      <div className="buttons-container">
        <Button onClick={onCloseDialog}>Cancel</Button>
        <Button onClick={onNewProjectSave}>Save</Button>
      </div>
    </dialog>
  );
}
