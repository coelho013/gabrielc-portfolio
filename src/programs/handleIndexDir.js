const handleIndexDir = (actualIndex, dirlength, setActualIndex, setInitTab) => {
    const newActualIndex = actualIndex === dirlength - 1 ? 0 : actualIndex + 1;
    setActualIndex(newActualIndex);
    setInitTab(1);

    return newActualIndex;
}

export default handleIndexDir;