export default function Form({onSubmit}) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'model'}/>
                <input type="text" name={'price'}/>
                <input type="text" name={'year'}/>
                <button>add car</button>
            </form>

        </div>
    );
}