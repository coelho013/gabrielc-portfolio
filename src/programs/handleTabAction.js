import handleIndexDir from "./handleIndexDir";

const handleTabAction = (setInputValue, inputValue, originalInputValue, dir, dirlength, initTab, actualIndex, setActualIndex, setInitTab) => {
    setInputValue(() => 
    initTab === 1 ? originalInputValue + dir[handleIndexDir(actualIndex, dirlength, setActualIndex, setInitTab)].name : inputValue.endsWith(' ')  ? originalInputValue + dir[handleIndexDir(actualIndex, dirlength, setActualIndex, setInitTab)].name :  inputValue
    );
}

export default handleTabAction;