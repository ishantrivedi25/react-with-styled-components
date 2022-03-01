export const getList = (list) => {
    return list.map((label, index) => (
        <li key={index}>{label}</li>
    ));
};