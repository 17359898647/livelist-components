import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
} from '~/components/ui/number-field'

export function NumberFieldDemo() {
  return (
    <NumberField class="w-36" defaultValue={40}>
      <NumberFieldGroup>
        <NumberFieldInput />
        <NumberFieldIncrementTrigger />
        <NumberFieldDecrementTrigger />
      </NumberFieldGroup>
    </NumberField>
  )
}
