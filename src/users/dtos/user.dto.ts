import { Expose } from 'class-transformer';
// Expose decorator is used to expose a property to the client
// Meaning of expose is to make a property visible to the client
// Oposite of expose is Exclude
// Expose:Visible
// Exclude:Hidden

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
