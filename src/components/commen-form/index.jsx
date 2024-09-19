import CommenInput from "../commen-input";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommenForm({
  formControls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) {
  function renderFormElement(getCurrentFormControl, getFormData) {
    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommenInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <CommenInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={getFormData[getCurrentFormControl.name]}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormControls) =>
        renderFormElement(singleFormControls, formData)
      )}

      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
}

export default CommenForm;
