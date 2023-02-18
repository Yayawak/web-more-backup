import { ITutitionFeeCard,ITutitionFeeCard2 } from "@/types/tutition-fee";

import iconChem from '@/assets/icons/icon-chemist.png';
import iconMath from '@/assets/icons/icon-math.png';
import iconPhysic from '@/assets/icons/icon-physics.png';
import iconBio from '@/assets/icons/icon-biology.png';
import iconCom from '@/assets/icons/icon-comsci.png';
import iconStat from '@/assets/icons/icon-stat.png';


export const courseSet: { [key: string]: string } = { bachelor: 'ปริญญาตรี', master: 'ปริญญาโท', doctorate: 'ปริญญาเอก' };

export const departmentSet: { [key: string]: string } = {
  ทั้งหมด: 'ทั้งหมด',
  ภาควิชาเคมี: 'ภาควิชาเคมี',
  ภาควิชาคณิตศาสตร์: 'ภาควิชาคณิตศาสตร์',
  ภาควิชาฟิสิกส์: 'ภาควิชาฟิสิกส์',
  ภาควิชาชีววิทยา: 'ภาควิชาชีววิทยา',
  ภาควิชาวิทยาการคอมพิวเตอร์: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  ภาควิชาสถิติ: 'ภาควิชาสถิติ',
};

export const dataBachelor: ITutitionFeeCard[] = [{
  icon: iconChem,
  department: 'ภาควิชาเคมี',
  branch: [{
    name: 'สาขาวิชาเทคโนโลยีสิ่งแวดล้อมและการจัดการอย่างยั่งยืน',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }, {
    name: 'สาขาวิชาเคมีอุตสาหกรรม',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }]
},{
  icon: iconPhysic,
  department: 'ภาควิชาฟิสิกส์',
  branch: [{
    name: 'สาขาวิชาฟิสิกส์ประยุกต์',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  },{
    name: 'สาขาวิชาฟิสิกส์อุตสาหกรรม',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }]
},{
  icon: iconBio,
  department: 'ภาควิชาชีววิทยา',
  branch: [{
    name: 'สาขาวิชาเทคโนโลยีชีวภาพอุตสาหกรรม',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  },{
    name: 'สาขาวิชาจุลชีววิทยาอุตสาหกรรม',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }]
},{
  icon: iconCom,
  department: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  branch: [{
    name: 'สาขาวิชาวิทยาการคอมพิวเตอร์',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }]
},{
  icon: iconStat,
  department: 'ภาควิชาสถิติ',
  branch: [{
    name: 'สาขาวิชาสถิติประยุกต์และการวิเคราะห์ข้อมูล',
    tutitionFee: 'xx,xxx',
    credit: 'xxx',
  }]
}
]

export const dataMaster: ITutitionFeeCard2[] = [{
  icon: iconChem,
  department: 'ภาควิชาเคมี',
  branch: [{
    name: 'สาขาวิชาเคมีประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }, {
    name: 'สาขาวิชาเคมีสิ่งแวดล้อม',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }, {
    name: 'สาขาวิชาเทคโนโลยีพอลิเมอร์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  },]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ข',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },]
  },{
    name: 'MASTER OF SCIENCE PROGRAM IN ACTUARIAL SCIENCE (INTERNATIONAL PROGRAM)',
    lessonPlan: [{
      name:'NEW CURRICULUM 2020',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconPhysic,
  department: 'ภาควิชาฟิสิกส์',
  branch: [{
    name: '',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconBio,
  department: 'ภาควิชาชีววิทยา',
  branch: [{
    name: '',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconCom,
  department: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  branch: [{
    name: '',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconStat,
  department: 'ภาควิชาสถิติ',
  branch: [{
    name: 'สาขาวิชาสถิติและการวิเคราะห์ธุรกิจ',
    lessonPlan: [{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ข',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  },{
    name: 'สาขาวิชาสถิติประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},
]

export const dataDoctorate: ITutitionFeeCard2[] = [{
  icon: iconChem,
  department: 'ภาควิชาเคมี',
  branch: [{
    name: 'สาขาวิชาเคมีประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }, {
    name: 'สาขาวิชาเคมีสิ่งแวดล้อม',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }, {
    name: 'สาขาวิชาเทคโนโลยีพอลิเมอร์',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },
    {
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  },]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียนแบบ 1.1 : แผนการศึกษาที่เน้นการวิจัย',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียนแบบ 2.1 : แผนการศึกษารายวิชาควบคู่กับการวิจัย',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconMath,
  department: 'ภาควิชาคณิตศาสตร์',
  branch: [{
    name: 'สาขาวิชาคณิตศาสตร์ประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียนแบบ 1.1 : แผนการศึกษาที่เน้นการวิจัย',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียนแบบ 2.1 : แผนการศึกษารายวิชาควบคู่กับการวิจัย',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconPhysic,
  department: 'ภาควิชาฟิสิกส์',
  branch: [{
    name: '',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconBio,
  department: 'ภาควิชาชีววิทยา',
  branch: [{
    name: '',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconCom,
  department: 'ภาควิชาวิทยาการคอมพิวเตอร์',
  branch: [{
    name: '',
    lessonPlan: [{
      name:'แผนการเรียน ก1',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},{
  icon: iconStat,
  department: 'ภาควิชาสถิติ',
  branch: [{
    name: 'สาขาวิชาสถิติและการวิเคราะห์ธุรกิจ',
    lessonPlan: [{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    },{
      name:'แผนการเรียน ข',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  },{
    name: 'สาขาวิชาสถิติประยุกต์',
    lessonPlan: [{
      name:'แผนการเรียน ก2',
      tutitionFee: 'xx,xxx',
      credit: 'xxx',
    }]
  }]
},
]