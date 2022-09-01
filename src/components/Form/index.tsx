import React from 'react'
import {
  SubmitHandler,
  useForm,
  FormProvider,
  useFormContext,
  useController,
  UseControllerProps,
  UseFormProps,
  FieldValues,
} from 'react-hook-form'
import { Form, Button, ButtonProps } from 'react-bootstrap'

import classNames from 'classnames'

import omit from 'lodash.omit'

declare interface SmartFormProps<TFormValues extends FieldValues>
  extends UseFormProps<TFormValues> {
  onSubmit: SubmitHandler<TFormValues>
  children?: React.ReactNode
  className?: string
}

export default function SmartForm<TFormValues extends FieldValues>({
  onSubmit,
  children,
  className,
  ...rest
}: SmartFormProps<TFormValues>) {
  const methods = useForm(rest)
  const { handleSubmit } = methods

  return (
    <FormProvider
      {...methods}
      children={
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className={classNames(className)}
        >
          {children}
        </Form>
      }
    />
  )
}

declare interface SmartFormChildProps<TFieldValues extends FieldValues>
  extends UseControllerProps<TFieldValues> {
  label?: React.ReactNode | string
  children?: React.ReactNode
  className?: string
  type?: string
}

declare interface InputProps<TFieldValues extends FieldValues>
  extends SmartFormChildProps<TFieldValues> {
  append?: React.ReactNode
}

export const SmartInput = <TFieldValues extends FieldValues = FieldValues>({
  label,
  children,
  append,
  className,
  ...rest
}: InputProps<TFieldValues>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const { field } = useController({ ...rest, ...control })

  const error = errors?.[rest.name]?.message as string

  return (
    <Form.Group className={classNames(className)}>
      <Form.Label htmlFor={rest.name}>{label}</Form.Label>
      <div className="append">
        <Form.Control {...omit(field, 'ref')} {...rest} id={rest.name} />
        {append && append}
      </div>
      {error && <div className="error">{error}</div>}
    </Form.Group>
  )
}

export function SmartCheckbox<TFieldValues extends FieldValues = FieldValues>({
  className,
  ...rest
}: SmartFormChildProps<TFieldValues>) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const { field } = useController({ ...rest, ...control })

  const error = errors?.[rest.name]?.message as string

  return (
    <Form.Group className={classNames(className)}>
      <Form.Check
        {...omit(field, 'ref')}
        {...rest}
        type="checkbox"
        id={rest.name}
      />
      {error && <div className="error">{error}</div>}
    </Form.Group>
  )
}

declare interface SmartButtonProps extends ButtonProps {
  label: string
}

export const SmartButton: React.FC<SmartButtonProps> = ({ label, ...rest }) => {
  const {
    formState: { isValid, isDirty, isSubmitting },
  } = useFormContext()

  const shouldDisableSubmit = !isDirty || !isValid || isSubmitting

  return (
    <Button disabled={shouldDisableSubmit} {...rest}>
      {label}
    </Button>
  )
}
