export type TableColumnDataType = 'text' | 'number' | 'select' | 'mselect' | 'status' | 'date' | 'person' | 'files' | 'checkbox' | 'url' | 'email' | 'phone' | 'formula' | 'created-at' | 'created-by' | 'updated-at' | 'updated-by';

interface TableColumnType {
    type: TableColumnDataType,
    label: string,
    icon?: string,
    description?: string,
}

const TABLE_COLUMN_TYPES: TableColumnType[] = [
    {
        type: 'text',
        label: 'text',
        icon: 'solid_check',
        description: 'as das dsa d asd asd asd',
    },
    {
        type: 'number',
        label: 'number',
    },
    {
        type: 'select',
        label: 'select',
    },
    {
        type: 'mselect',
        label: 'multi-select',
    },
    {
        type: 'status',
        label: 'status',
    },
    {
        type: 'date',
        label: 'date',
    },
    {
        type: 'person',
        label: 'person',
    },
    {
        type: 'files',
        label: 'files',
    },
    {
        type: 'checkbox',
        label: 'checkbox',
    },
    {
        type: 'url',
        label: 'URL',
    },
    {
        type: 'email',
        label: 'email',
    },
    {
        type: 'phone',
        label: 'phone',
    },
    {
        type: 'formula',
        label: 'formula',
    },
    {
        type: 'created-at',
        label: 'created at',
    },
    {
        type: 'created-by',
        label: 'created by',
    },
    {
        type: 'updated-at',
        label: 'updated at',
    },
    {
        type: 'updated-by',
        label: 'updated by',
    },
]

export default TABLE_COLUMN_TYPES