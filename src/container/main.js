import React from 'react';
import './../App.css';
import TableComponent from "./../components/Table";

function Main() {
    return (
        <div>
            <div class="Row">
                <div class="Column"><TableComponent></TableComponent></div>
                <div class="Column">C2</div>
                <div class="Column">C3</div>
            </div>
            <div class="Row1">
                <div class="Column1"><TableComponent></TableComponent></div>
                <div class="Column1">C2</div>
                <div class="Column1">C3</div>
                <div class="Column1">C4</div>
            </div>
        </div>
    );
}

export default Main;
