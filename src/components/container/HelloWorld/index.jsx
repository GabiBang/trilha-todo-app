import { Button } from '../../presentational/Button';

export const HelloWorld = function() {
    return (
        <div>
            <div className="container">
                <h1>ToDo App <span className="material-symbols-rounded">settings</span></h1>
                <p>Hello World</p>
                <p>
                    <Button label="firts button"></Button>
                    <Button label="second button"></Button>
                </p>
            </div>
        </div>
    );
};