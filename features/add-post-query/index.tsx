import { ChangeEventHandler, useState } from 'react';
import { useAddPostMutation } from 'entities/posts';
import { Button } from 'shared/ui/Button';

export const AddPostQuery = () => {
    const { mutate, /* data, */ isLoading } = useAddPostMutation();

    const [value, setValue] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    const handleCreate = () => {
        mutate(value);
    };

    return (
        <div style={{ marginTop: 5, marginBottom: 5, display: 'flex', gap: 8 }}>
            <input type="text" value={value} onChange={handleChange} />
            <Button
                isDisabled={isLoading || !value.length}
                isLoading={isLoading}
                onClick={handleCreate}
            >
                Create Post
            </Button>
        </div>
    );
};
