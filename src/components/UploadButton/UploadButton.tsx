import React, {
  useCallback,
  useRef,
  type ChangeEvent,
} from 'react';
import classnames from 'classnames';

type UploadButtonProps = {
  onChange: (formData: FormData) => void;
  setNewSrc: (src: string) => void;
};

export default function UploadButton({ onChange, setNewSrc }
  : UploadButtonProps) {
  const elementInputFile = useRef<HTMLInputElement>(null);
  const validateImgFile = (file: File | undefined) => !!file?.type.match('image.*');
  const onInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target;

    if (!files?.[0]) {
      return;
    }

    if (!validateImgFile(files[0])) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setNewSrc(e.target?.result as string);
    };
    reader.readAsDataURL(files[0]);

    const form = new FormData();
    form.append('resource', files[0]);

    onChange(form);
  }, []);

  return (
    <label className={classnames('upload__label')} htmlFor="resource">
      <input
        name="resource"
        ref={elementInputFile}
        type="file"
        onChange={onInputChange}
        id="resource"
        className={classnames('visually-hidden')}
      />
    </label>
  );
}
