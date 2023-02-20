import { ITutitionFeeCard,ITutitionFeeCard2 } from "@/types/tutition-fee";

import iconChem from '@/assets/icons/icon-chemist.png';
import iconMath from '@/assets/icons/icon-math.png';
import iconPhysic from '@/assets/icons/icon-physics.png';
import iconBio from '@/assets/icons/icon-biology.png';
import iconCom from '@/assets/icons/icon-comsci.png';
import iconStat from '@/assets/icons/icon-stat.png';
import iconKdai from '@/assets/icons/icon-kdai.png';


export const courseSet: { [key: string]: string } = { bachelor: 'ปริญญาตรี', master: 'ปริญญาโท', doctorate: 'ปริญญาเอก' };

export const departmentSet: { [key: string]: string } = {
  ทั้งหมด: 'ทั้งหมด',
  ภาควิชาเคมี: 'ภาควิชาเคมี',
  ภาควิชาคณิตศาสตร์: 'ภาควิชาคณิตศาสตร์',
  ภาควิชาฟิสิกส์: 'ภาควิชาฟิสิกส์',
  ภาควิชาชีววิทยา: 'ภาควิชาชีววิทยา',
  ภาควิชาวิทยาการคอมพิวเตอร์: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  ภาควิชาสถิติ: 'ภาควิชาสถิติ',
  ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง:'ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง',
};

export const dataBachelor: ITutitionFeeCard[] = [{
  icon: iconChem,
  department: 'ภาควิชาเคมี',
  branch: [{
    name: 'สาขาวิชาเทคโนโลยีสิ่งแวดล้อมและการจัดการอย่างยั่งยืน',
    tutitionFee: '19,000',
    credit: '134',
  }, {
    name: 'สาขาวิชาเคมีสิ่งแวดล้อม',
    tutitionFee: '19,000',
    credit: '143',
  }, {
    name: 'สาขาวิชาเคมีอุตสาหกรรม',
    tutitionFee: '19,000',
    credit: '128',
  }, {
    name: 'สาขาวิชาเคมีวิศวกรรมและอุตสาหกรรม (หลักสูตรนานาชาติ)',
    tutitionFee: '75,000',
    credit: '124(One degree) | 124(Two degree)',
  }]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์',
    tutitionFee: '19,000',
    credit: '127',
  }]
},{
  icon: iconPhysic,
  department: 'ภาควิชาฟิสิกส์',
  branch: [{
    name: 'สาขาวิชาฟิสิกส์ประยุกต์',
    tutitionFee: '19,000',
    credit: '135',
  },{
    name: 'สาขาวิชาฟิสิกส์อุตสาหกรรม',
    tutitionFee: '19,000',
    credit: '129',
  }]
},{
  icon: iconBio,
  department: 'ภาควิชาชีววิทยา',
  branch: [{
    name: 'สาขาวิชาเทคโนโลยีชีวภาพ',
    tutitionFee: '19,000',
    credit: '130',
  },{
    name: 'สาขาวิชาจุลชีววิทยาอุตสาหกรรม',
    tutitionFee: '19,000',
    credit: '133',
  },{
    name: 'สาขาวิชาเทคโนโลยีชีวภาพอุตสาหกรรม',
    tutitionFee: '19,000',
    credit: '130',
  },{
    name: 'สาขาวิชาจุลชีววิทยาอุตสาหกรรม',
    tutitionFee: '19,000',
    credit: '133',
  },{
    name: 'สาขาวิชาจุลชีววิทยาอุตสาหกรรม (หลักสูตรนานาชาติ) ',
    tutitionFee: '19,000',
    credit: '133(One degree) | 154(Two degree)',
  }]
},{
  icon: iconCom,
  department: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  branch: [{
    name: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
    tutitionFee: '19,000',
    credit: '135',
  }]
},{
  icon: iconStat,
  department: 'ภาควิชาสถิติ',
  branch: [{
    name: 'สาขาวิชาสถิติประยุกต์',
    tutitionFee: '19,000',
    credit: '136',
  },{
    name: 'สาขาวิชาสถิติประยุกต์และการวิเคราะห์ข้อมูล',
    tutitionFee: '19,000',
    credit: '127',
  }]
},{
  icon: iconKdai,
  department: 'ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง',
  branch: [{
    name: 'สาขาวิชาสถิติประยุกต์และการวิเคราะห์ข้อมูล',
    tutitionFee: '65,000',
    credit: '127',
  }]
}
]

export const dataMaster: ITutitionFeeCard2[] = [{
  icon: iconChem,
  department: 'ภาควิชาเคมี',
  branch: [{
    name: 'สาขาวิชาเคมี',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  },{
    name: 'สาขาวิชาเคมีประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }, {
    name: 'สาขาวิชาเคมีสิ่งแวดล้อม',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }, {
    name: 'สาขาวิชาเทคโนโลยีพอลิเมอร์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: 'xx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: 'xx',
    }]
  },]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '38',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '38',
    },{
      name:'แผนการเรียน ข',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '38',
    },]
  },{
    name: 'MASTER OF SCIENCE PROGRAM IN ACTUARIAL SCIENCE (INTERNATIONAL PROGRAM)',
    lessonPlan: [{
      name:'NEW CURRICULUM 2020',
      tutitionFee1: 'xx,xxx',
      tutitionFee2:'xx,xxx',
      credit: '39(A1) | 39(A2) | 39(B)',
    }]
  }]
},{
  icon: iconPhysic,
  department: 'ภาควิชาฟิสิกส์',
  branch: [{
    name: 'สาขาวิชาฟิสิกส์ประยุกต์',
    lessonPlan: [{
      name:'',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }]
},{
  icon: iconBio,
  department: 'ภาควิชาชีววิทยา',
  branch: [{
    name: 'สาขาวิชาเทคโนโลยีชีวภาพ',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'800,000',
      credit: '36',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }]
},{
  icon: iconCom,
  department: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  branch: [{
    name: 'สาขาวิชาวิทยาการคอมพิวเตอร์ ',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }]
},{
  icon: iconStat,
  department: 'ภาควิชาสถิติ',
  branch: [{
    name: 'สาขาวิชาสถิติและการวิเคราะห์ธุรกิจ',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    },{
      name:'แผนการเรียน ข',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  },{
    name: 'สาขาวิชาสถิติประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก2',
      tutitionFee1: '21,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }]
},{
  icon: iconKdai,
  department: 'ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะพระจอมเกล้าลาดกระบัง',
  branch: [{
    name: 'สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์ ',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee1: '50,000',
      tutitionFee2:'80,000',
      credit: '36',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee1: '50,000',
      tutitionFee2:'80,000',
      credit: '36',
    },{
      name:'แผนการเรียน ข',
      tutitionFee1: '50,000',
      tutitionFee2:'80,000',
      credit: '36',
    }]
  }]
}
]

export const dataDoctorate: ITutitionFeeCard2[] = [{
  icon: iconChem,
  department: 'ภาควิชาเคมี',
  branch: [{
    name: 'สาขาวิชาเคมีประยุกต์',
    lessonPlan: [{
      name:'แบบ 1.1 แผนการศึกษาที่เน้นการวิจัย',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '48',
    },
    {
      name:'แบบ 2.1 แผนการศึกษาเรียนรายวิชาควบคู่กับการวิจัย',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '48',
    },{
      name:'แบบ 2.2 แผนการศึกษาเรียนรายวิชาควบคู่กับการวิจัย',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '72',
    }]
  }]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์ ',
    lessonPlan: [{
      name:'แบบ 1.1 แผนการศึกษาที่เน้นการวิจัย',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: 'xxx',
    },{
      name:'แบบ 2.1 แผนการศึกษาเรียนรายวิชาควบคู่กับการวิจัย',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: 'xxx',
    },{
      name:'แบบ 2.2 แผนการศึกษาเรียนรายวิชาควบคู่กับการวิจัย',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '72',
    }]
  }]
},{
  icon: iconPhysic,
  department: 'ภาควิชาฟิสิกส์',
  branch: [{
    name: 'สาขาวิชาฟิสิกส์ประยุกต์',
    lessonPlan: [{
      name:'แบบ 1.1 สําหรับผู้เข้าศึกษาที่สําเร็จปริญญาโท',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '48',
    },{
      name:'แบบ 1.2 สําหรับผู้เข้าศึกษาที่สําเร็จปริญญาตรี',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '72',
    }]
  }]
},{
  icon: iconBio,
  department: 'ภาควิชาชีววิทยา',
  branch: [{
    name: 'สาขาวิชาเทคโนโลยีชีวภาพ',
    lessonPlan: [{
      name:'แบบ 1.1 สำหรับผู้เข้าศึกษาที่สำเร็จปริญญาโท',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '51',
    },{
      name:'แบบ 1.2 สำหรับผู้เข้าศึกษาที่สำเร็จปริญญาตรี',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '77',
    }]
  }]
},{
  icon: iconCom,
  department: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  branch: [{
    name: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
    lessonPlan: [{
      name:'แบบ 1.1 สำหรับผู้เข้าศึกษาที่สำเร็จปริญญาโท',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '48',
    },{
      name:'แบบ 2.1 สำหรับผู้เข้าศึกษาที่สำเร็จปริญญาโท',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '48',
    },{
      name:'แบบ 2.2 สำหรับผู้เข้าศึกษาที่สำเร็จปริญญาตรี',
      tutitionFee1: '35,000',
      tutitionFee2:'120,000',
      credit: '72',
    }]
  }]
}
]