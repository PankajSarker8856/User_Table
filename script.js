$(document).ready(function() {

  var dataSet = [
{id:1, name:"john", email:"johnmia@gmail.com", phone:"+8779675", totalScan:"5", totalSchudule:"2", status:"active", role:"MOdaretor"},
{id:2, name:"David", email:"davidmia@gmail.com", phone:"877967533", totalScan:"4", totalSchudule:"1", status:"active", role:"Editor"},
{id:3, name:"john", email:"Johnmia@gmail.com", phone:"+8779675", totalScan:"5", totalSchudule:"2", status:"active", role:"MOdaretor"}

  ];

  var columnDefs = [{
    data: "id",
    title: "Id",
    type: "readonly"
  },
  {
    data: "name",
    title: "Name"
  },
 {
    data: "email",
    title: "Email"
  },
 {
    data: "phone",
    title: "Phone"
  },
 {
    data: "totalScan",
    title: "Total Scan"
  },
 {
    data: "totalSchudule",
    title: "Total Schudule" 
  },

  {
    data: "status",
    title: "Status" 
  },

  {
    data: "role",
    title: "Role" 
  },

 {
    data: null,
    title: "Actions",
    name: "Actions",
    render: function (data, type, row, meta) {
      return '<a class="delbutton fa fa-minus-square btn btn-danger" href="#"></a>';
    },
    disabled: true
  } 
  ];

  var myTable;

  myTable = $('#example').DataTable({
    "sPaginationType": "full_numbers",
    data: dataSet,
    columns: columnDefs,
	dom: 'Bfrtip',        // Needs button container
    select: {
        style: 'single',
        toggleable: false
    },
    responsive: true,
    altEditor: true,     // Enable altEditor
    buttons: []          // no buttons, however this seems compulsory
  });

  // Edit
  $(document).on('click', "[id^='example'] tbody ", 'tr', function () {
    var tableID = $(this).closest('table').attr('id');    // id of the table
    var that = $( '#'+tableID )[0].altEditor;
    that._openEditModal();
    $('#altEditor-edit-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._editRowData();
                });
  });

  // Delete
  $(document).on('click', "[id^='example'] .delbutton", 'tr', function (x) {
    var tableID = $(this).closest('table').attr('id');    // id of the table
    var that = $( '#'+tableID )[0].altEditor;
    that._openDeleteModal();
    $('#altEditor-delete-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._deleteRow();
                });
    x.stopPropagation(); //avoid open "Edit" dialog
  });

  // Add row
  $('#addbutton').on('click', function () {
    var that = $( '#example' )[0].altEditor;
    that._openAddModal();
    $('#altEditor-add-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._addRowData();
                });
  });
});

