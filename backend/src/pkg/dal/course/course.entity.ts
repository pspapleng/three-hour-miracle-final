import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
import { ICourse } from './course.interface';

@Entity('course')
export class CourseEntity extends CommonEntity implements ICourse {
  @Column({ type: 'varchar', length: 255 })
  YEAR: string;

  @Column({ type: 'varchar', length: 255 })
  SEMESTER: string;

  @Column({ type: 'varchar', length: 255 })
  LEVEL_ID: string;

  @Column({ type: 'varchar', length: 255 })
  YEAR_ID: string;

  @Column({ type: 'varchar', length: 255 })
  ROUND_NUMBER: string;

  @Column({ type: 'varchar', length: 255 })
  ROUND_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  ROUND_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  ROUND_START_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  ROUND_END_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  ROUND_ID: string;

  @Column({ type: 'varchar', length: 255 })
  PROJECT_CODE: string;

  @Column({ type: 'varchar', length: 255 })
  PROJECT_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  PROJECT_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  APPLICANT_CAN_UPLOAD_DOCUMENT: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_ID: string;

  @Column({ type: 'varchar', length: 255 })
  PROJECT_ID: string;

  @Column({ type: 'varchar', length: 255 })
  TCAS_PROGRAM_ID: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_ADMIT_TYPE_ID: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_PLAN_ID: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_CLASSES_ID: string;

  @Column({ type: 'varchar', length: 255 })
  SPECIFIC_NATION_ID: string;

  @Column({ type: 'varchar', length: 255 })
  MASTER_REG_FACULTY_ID: string;

  @Column({ type: 'varchar', length: 255 })
  MASTER_REG_CURRICULUM_ID: string;

  @Column({ type: 'varchar', length: 255 })
  BRANCH_ID: string;

  @Column({ type: 'varchar', length: 255 })
  URL: string;

  @Column({ type: 'varchar', length: 255 })
  REMARK: string;

  @Column({ type: 'varchar', length: 255 })
  PDF_EXISTS: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_FEE: string;

  @Column({ type: 'varchar', length: 255 })
  START_APPLICATION_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  END_APPLICATION_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  START_APPLICATION_PAY_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  END_APPLICATION_PAY_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  START_CONFIRM_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  END_CONFIRM_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  START_CONFIRM_PAY_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  END_CONFIRM_PAY_DATE: string;

  @Column({ type: 'varchar', length: 255 })
  NUMBER_OF_RANKS: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_FULL_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_FULL_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_SHORT_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_SHORT_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  CURRICULUM_YEAR: string;

  @Column({ type: 'varchar', length: 255 })
  MASTER_REG_INTER: string;

  @Column({ type: 'varchar', length: 255 })
  FACULTY_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  FACULTY_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  BRANCH_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  BRANCH_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  HOT_CONSTRAINT: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_ADMIT_TYPE_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_ADMIT_TYPE_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_PLAN_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_PLAN_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_CLASSES_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  STUDY_CLASSES_NAME_EN: string;

  @Column({ type: 'varchar', length: 255 })
  SPECIFIC_NATION_NAME_TH: string;

  @Column({ type: 'varchar', length: 255 })
  SPECIFIC_NATION_NAME_EN: string;
}
