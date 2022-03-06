//Creates a button element
//TODO form elements and validation when adding a 'commission' section
export function Button({ className, disabled, name, type, form, onClick }) {
    return (
        <button
            className={`${className}-Button`}
            disabled={!!disabled ? true : false}
            name={!!name ? name : false}
            type={!!type ? type : 'button'}
            form={!!form}
            onClick={onClick}
        >
        </button>
    )
}