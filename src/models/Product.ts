import {
  AllowNull,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'products',
  timestamps: false,
})
export class Product extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
    primaryKey: true,
  })
    id: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    category: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    priceRegular: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    priceDiscount: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    screen: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    ram: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.STRING,
  })
    productCode: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    color: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    year: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    image: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    capacityAvailable: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    colorsAvailable: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    images: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.JSON),
  })
    description: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    resolution: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    processor: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.STRING,
  })
    camera: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.STRING,
  })
    zoom: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    cell: string;
}
