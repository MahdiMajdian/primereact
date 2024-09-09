
const theme = ({ dt }) => `
.p-orderlist {
    display: flex;
    gap: ${dt('orderlist.gap')};
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${dt('orderlist.controls.gap')};
}
`;

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls'
};

export const style = {
    name: 'orderlist',
    theme,
    classes
};
