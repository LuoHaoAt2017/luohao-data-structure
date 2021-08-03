import { VXETable } from 'vxe-table';
import CustomTextbox from "../textbox.vue";
import CustomAddress from "../address.vue";
import CustomDatetime from "../datetime.vue";
import CustomAttachment from "../attachment.vue";
import CustomOrganization from "../organization.vue";

VXETable.renderer.add('textbox', {
  renderDefault(h, options, params) {
    return [h(CustomTextbox, {
      props: {
        row: params.row,
        col: params.column
      }
    })];
  }
});

VXETable.renderer.add('datetime', {
  renderDefault(h, options, params) {
    return [h(CustomDatetime, {
      props: {
        row: params.row,
        col: params.column
      }
    })];
  }
});

VXETable.renderer.add('address', {
  renderDefault(h, options, params) {
    return [h(CustomAddress, {
      props: {
        row: params.row,
        col: params.column
      }
    })];
  }
});

VXETable.renderer.add('organization', {
  renderDefault(h, options, params) {
    return [h(CustomOrganization, {
      props: {
        row: params.row,
        col: params.column
      }
    })];
  }
});

VXETable.renderer.add('attachment', {
  renderDefault(h, options, params) {
    return [h(CustomAttachment, {
      props: {
        row: params.row,
        col: params.column
      }
    })];
  }
});
